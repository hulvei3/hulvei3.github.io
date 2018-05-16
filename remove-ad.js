(function(doc) {
  var ad = doc.getElementById('WIX_ADS');
  ad.parentNode.removeChild(ad);
  doc.getElementById('SITE_BACKGROUND').style.top = 0;
  doc.getElementById('SITE_ROOT').style.top = 0;
})(document);
