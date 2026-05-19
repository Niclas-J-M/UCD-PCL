# SGMA Norm Calculation Reference

This document contains all information needed to construct a norm plot for the Seattle-Groningen Memory Assessment (SGMA), based on a person's age and education level.

---

## 1. Input Variables

The model requires two inputs:

- **Age** (in years) — derived from birth year
- **Education level** — coded as an integer 0–4:

| Code | Dutch label       | English label        | Offset value |
|------|-------------------|----------------------|--------------|
| 0    | Basisonderwijs    | Elementary           | 0.000        |
| 1    | MBO/VMBO          | Vocational           | −0.006       |
| 2    | HAVO/VWO          | Pre-university       | −0.021       |
| 3    | HBO               | Higher vocational    | −0.024       |
| 4    | Universitair      | Academic             | −0.036       |

If no education level is available, the average offset of **−0.015** is used.

---

## 2. Core Model Parameters

The norm model is a simple linear regression on the **Speed of Forgetting (SoF)** — the raw parameter that the SGMA measures. A higher SoF means faster forgetting (worse memory).

| Parameter   | Symbol       | Value   |
|-------------|--------------|---------|
| Intercept   | β₀           | 0.32    |
| Age slope   | β_age        | 0.0015  |
| Residual SD | σ_residual   | 0.036   |

---

## 3. Step-by-Step Calculation

### 3.1 Predicted Speed of Forgetting

For a given age and education offset:

```
predictedSoF(age, edu_offset) = β₀ + β_age × age + edu_offset
```

This gives the **expected (median) SoF** for a person of that age and education level.

### 3.2 Percentile Calculation

Given a person's observed SoF, their percentile relative to their norm group is:

```
z = (predictedSoF − observedSoF) / σ_residual
percentile = Φ(z) × 100
```

Where **Φ(z)** is the standard normal CDF.

Note: the subtraction is `predicted − observed` (not the other way around), because a **lower** SoF means **better** memory, so someone with a lower-than-predicted SoF scores *above* average.

### 3.3 SoF at a Given Percentile

To compute the SoF value corresponding to a specific percentile *p* (as a proportion, e.g. 0.50 for the median):

```
sofAtPercentile(age, p, edu_offset) = predictedSoF(age, edu_offset) − Φ⁻¹(p) × σ_residual
```

Where **Φ⁻¹(p)** is the standard normal inverse CDF (quantile function).

### 3.4 SoF to SGMA Score Transformation

The raw SoF is transformed into the SGMA score (range approximately 30–170) using a **logistic (sigmoid) transformation**:

```
SGMA(sof) = 140 / (1 + e^(15 × (sof − 0.33))) + 30
```

This means:
- Very low SoF (good memory) → SGMA ≈ 170
- SoF around 0.33 → SGMA ≈ 100 (midpoint)
- Very high SoF (poor memory) → SGMA ≈ 30

---

## 4. Constructing the Norm Plot

The norm plot has:
- **X-axis**: Age (15–80 years)
- **Y-axis**: SGMA score (60–130)

### 4.1 Computing the Band Boundaries

For each age value from 15 to 80 (step of 1 year), compute five SGMA-score boundary lines by converting SoF-at-percentile to SGMA:

| Line | Percentile | Meaning                        |
|------|------------|--------------------------------|
| p80  | 0.80       | Upper boundary of "Above avg"  |
| p60  | 0.60       | Upper boundary of "Average"    |
| p50  | 0.50       | Median (dashed reference line) |
| p40  | 0.40       | Lower boundary of "Average"    |
| p20  | 0.20       | Lower boundary of "Below avg"  |

For p40 and p20, use the symmetry of the normal distribution:

```
p40(age) = sofToSGMA( predictedSoF(age, offset) − (sofAtPercentile(age, 0.60, offset) − predictedSoF(age, offset)) )
         = sofToSGMA( 2 × predictedSoF(age, offset) − sofAtPercentile(age, 0.60, offset) )

p20(age) = sofToSGMA( 2 × predictedSoF(age, offset) − sofAtPercentile(age, 0.80, offset) )
```

Or equivalently, just use `sofAtPercentile` directly with p=0.40 and p=0.20.

### 4.2 The Five Category Bands

| Band             | Percentile range | Description                 |
|------------------|------------------|-----------------------------|
| Good             | 80–100           | Top of chart to p80 line    |
| Above average    | 60–80            | p80 line to p60 line        |
| Average          | 40–60            | p60 line to p40 line        |
| Below average    | 20–40            | p40 line to p20 line        |
| Low              | 0–20             | p20 line to bottom of chart |

The bands are drawn as filled areas between the boundary lines. The median (p50) is shown as a dashed line through the center of the "Average" band.

### 4.3 Plotting a Person's Score

Given a person's observed SoF:

1. Compute `sgmaScore = sofToSGMA(observedSoF)`
2. Plot a dot at coordinates `(age, sgmaScore)`
3. If the dot falls outside the chart range (age 15–80, SGMA 60–130), clamp it to just inside the boundary so it remains visible

---

## 5. Example Calculation

**Person**: age 41, education level 2 (HAVO/VWO), observed SoF = 0.35

1. Education offset = −0.021
2. Predicted SoF = 0.32 + 0.0015 × 41 + (−0.021) = 0.3605
3. z = (0.3605 − 0.35) / 0.036 = 0.292
4. Percentile = Φ(0.292) × 100 ≈ 61.5%
5. SGMA score = 140 / (1 + e^(15 × (0.35 − 0.33))) + 30 = 140 / (1 + e^0.3) + 30 ≈ 140/1.3499 + 30 ≈ 133.7

This person scores at the 62nd percentile (above average) with an SGMA score of approximately 133.7.

---

## 6. Summary of All Formulas

```
predictedSoF(age, offset) = 0.32 + 0.0015 × age + offset

percentile(age, sof, offset) = Φ((predictedSoF(age, offset) − sof) / 0.036) × 100

sofAtPercentile(age, p, offset) = predictedSoF(age, offset) − Φ⁻¹(p) × 0.036

SGMA(sof) = 140 / (1 + e^(15 × (sof − 0.33))) + 30
```

Where:
- Φ(z) = standard normal CDF
- Φ⁻¹(p) = standard normal inverse CDF (quantile function)
- offset = education-level-specific adjustment (see table in Section 1)

---
