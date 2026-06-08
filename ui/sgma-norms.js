(function () {
  const B0 = 0.32;
  const B_AGE = 0.0015;
  const SIGMA = 0.036;
  const educationOffsets = [0.000, -0.006, -0.021, -0.024, -0.036];
  const educationLabels = [
    'Elementary',
    'Vocational (MBO/VMBO)',
    'Pre-university (HAVO/VWO)',
    'Higher vocational (HBO)',
    'Academic',
  ];

  function normCDF(z) {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    const sign = z < 0 ? -1 : 1;
    const x = Math.abs(z) / Math.sqrt(2);
    const t = 1 / (1 + p * x);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return 0.5 * (1 + sign * y);
  }

  function normInvCDF(p) {
    const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.3577518672690, -30.66479806614716, 2.506628277459239];
    const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
    const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
    const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
    const plow = 0.02425;
    const phigh = 1 - plow;
    let q;
    if (p < plow) {
      q = Math.sqrt(-2 * Math.log(p));
      return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
        ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }
    if (p <= phigh) {
      q = p - 0.5;
      const r = q * q;
      return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
    }
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }

  function predictedSoF(age, educationOffset) {
    return B0 + B_AGE * age + educationOffset;
  }

  function sofAtPercentile(age, percentile, educationOffset) {
    return predictedSoF(age, educationOffset) - normInvCDF(percentile) * SIGMA;
  }

  function sofToSGMA(sof) {
    return 140 / (1 + Math.exp(15 * (sof - 0.33))) + 30;
  }

  function calcPercentile(age, sof, educationOffset) {
    return normCDF((predictedSoF(age, educationOffset) - sof) / SIGMA) * 100;
  }

  function sgmaAtPercentile(age, percentile, educationOffset) {
    return sofToSGMA(sofAtPercentile(age, percentile, educationOffset));
  }

  function comparisonBands(patient, education) {
    const offset = education && typeof education.offset === 'number' ? education.offset : 0;
    return {
      high: sgmaAtPercentile(patient.age, 0.80, offset),
      low: sgmaAtPercentile(patient.age, 0.20, offset),
      median: sgmaAtPercentile(patient.age, 0.50, offset),
    };
  }

  window.MemoryLabNorms = {
    educationLabels,
    educationOffsets,
    normCDF,
    normInvCDF,
    predictedSoF,
    sofAtPercentile,
    sofToSGMA,
    calcPercentile,
    sgmaAtPercentile,
    comparisonBands,
  };
})();
