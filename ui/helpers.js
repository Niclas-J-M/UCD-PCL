(function () {
  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function patientProfileUrl(patientOrId) {
    const id = typeof patientOrId === 'string' ? patientOrId : patientOrId.id;
    return 'patient_profile.html?patient=' + encodeURIComponent(id);
  }

  function patientSessionUrl(patientOrId, sessionIndex) {
    const id = typeof patientOrId === 'string' ? patientOrId : patientOrId.id;
    return 'patient_session.html?patient=' + encodeURIComponent(id) + '&session=' + encodeURIComponent(sessionIndex);
  }

  function scheduleUrl(patientOrId, params = {}) {
    const query = [];
    if (patientOrId) {
      const id = typeof patientOrId === 'string' ? patientOrId : patientOrId.id;
      query.push(['patient', id]);
    }
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') query.push([key, value]);
    });
    const qs = query.map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&');
    return 'schedule.html' + (qs ? '?' + qs : '');
  }

  function patientViewUrl(patientOrId) {
    const id = typeof patientOrId === 'string' ? patientOrId : patientOrId.id;
    return 'patients_view.html?patient=' + encodeURIComponent(id);
  }

  function trendHtml(trend, options = {}) {
    const compact = !!options.compact;
    if (trend === 'declining') return '<span class="trend declining"><span class="arrow">&#8600;</span> ' + (compact ? 'Declining' : 'Declining') + '</span>';
    if (trend === 'new') return '<span class="trend new"><span class="arrow">&#8226;</span> ' + (compact ? 'New' : 'New patient') + '</span>';
    return '<span class="trend stable"><span class="arrow">&#8594;</span> Stable</span>';
  }

  function badgeHtml(badge) {
    const cls = badge.cls || badge.type || '';
    const label = escapeHtml(badge.label || '');
    const filter = badge.filter;
    const filterAttr = filter ? ' data-filter="' + escapeHtml(filter) + '" role="button" tabindex="0" title="Filter by ' + label + '"' : '';
    const filterClass = filter ? ' filterable' : '';
    return '<span class="badge ' + escapeHtml(cls) + filterClass + '"' + filterAttr + '>' + label + '</span>';
  }

  function patientBadgesHtml(badges, options = {}) {
    const items = (badges || []).map(badge => ({
      cls: badge.type || badge.cls || '',
      label: badge.label,
      filter: badge.filter,
    }));
    if (!items.length && options.emptyLabel) items.push({ cls: '', label: options.emptyLabel });
    return items.map(badgeHtml).join('');
  }

  function formatShortDate(date) {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }

  function formatDate(date) {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  window.MemoryLabUI = {
    escapeHtml,
    patientProfileUrl,
    patientSessionUrl,
    scheduleUrl,
    patientViewUrl,
    trendHtml,
    badgeHtml,
    patientBadgesHtml,
    formatShortDate,
    formatDate,
  };
})();
