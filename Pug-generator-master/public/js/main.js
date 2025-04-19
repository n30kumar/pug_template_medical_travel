function switchData() {
    const current = new URLSearchParams(window.location.search).get('dataset') || '1';
    const next = current === '1' ? '2' : '1';
    window.location.search = `?dataset=${next}`;
  }