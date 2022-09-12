var script_url = "https://script.google.com/macros/s/AKfycbzrOmTxgQfYiUeYWfyzVdXOJ0CYKOFnCQQoOJuxjU-74i186HfF/exec";

$(function() {
    read_value();
})

function read_value() {
    var url = script_url+"?action=read";

    $.getJSON(url, function (json) {

        // ADD JSON DATA TO THE TABLE AS ROWS.
        var html_header = `
        <tr>
            <th width="60%">Type</th>
            <th width="40%">Harga</th>
        </tr>`

        html_agya = html_header
        html_calya = html_header
        html_avanza = html_header
        html_rush = html_header
        html_veloz = html_header
        html_raize = html_header
        html_fortuner = html_header
        html_inova = html_header
        html_c_hr = html_header
        html_vios = html_header
        html_altis = html_header
        html_camry = html_header
        html_hilux = html_header
        html_hi_ace = html_header
        html_land_cruiser = html_header
        html_alphard = html_header
        html_vellfire = html_header
        html_corolla_cross = html_header
        html_voxy = html_header
        html_sienta = html_header

        notes_agya = ''
        notes_calya = ''
        notes_avanza = ''
        notes_rush = ''
        notes_veloz = ''
        notes_raize = ''
        notes_fortuner = ''
        notes_inova = ''
        notes_c_hr = ''
        notes_vios = ''
        notes_altis = ''
        notes_camry = ''
        notes_hilux = ''
        notes_hi_ace = ''
        notes_land_cruiser = ''
        notes_alphard = ''
        notes_vellfire = ''
        notes_corolla_cross = ''
        notes_voxy = ''
        notes_sienta = ''

        for (var i = 0; i < json.records.length; i++) {

              if (json.records[i].TYPE == 'agya') {
                  html_agya += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_agya += `<tr><td colspan="2"><b></b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'calya') {
                  html_calya += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_calya += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'avanza') {
                  html_avanza += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_avanza += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'rush') {
                  html_rush += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_rush += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'veloz') {
                  html_veloz += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_veloz += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'raize') {
                  html_raize += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_raize += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'fortuner') {
                  html_fortuner += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_fortuner += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'inova') {
                  html_inova += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_inova += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'c_hr') {
                  html_c_hr += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_c_hr += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'vios') {
                  html_vios += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_vios += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'altis') {
                  html_altis += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_altis += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'camry') {
                  html_camry += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_camry += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'hilux') {
                  html_hilux += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_hilux += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'hi_ace') {
                  html_hi_ace += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_hi_ace += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'land_cruiser') {
                  html_land_cruiser += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_land_cruiser += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'alphard') {
                  html_alphard += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_alphard += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'vellfire') {
                  html_vellfire += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_vellfire += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'corolla_cross') {
                  html_corolla_cross += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_corolla_cross += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'voxy') {
                  html_voxy += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_voxy += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
              else if (json.records[i].TYPE == 'sienta') {
                  html_sienta += `<tr><td>${json.records[i].NAME}</td><td>Rp. ${json.records[i].PRICE.toLocaleString('de-DE')}</td></tr>`
                  if (!json.records[i].NOTES == ''){
                      notes_sienta += `<tr><td colspan="2"><b>${json.records[i].NOTES}</b></td></tr>`
                  }
              }
            }

        $(".price_agya").html(html_agya+notes_agya);
        $(".price_calya").html(html_calya+notes_calya);
        $(".price_avanza").html(html_avanza+notes_avanza);
        $(".price_rush").html(html_rush+notes_rush);
        $(".price_veloz").html(html_veloz+notes_veloz);
        $(".price_raize").html(html_raize+notes_raize);
        $(".price_fortuner").html(html_fortuner+notes_fortuner);
        $(".price_inova").html(html_inova+notes_inova);
        $(".price_c_hr").html(html_c_hr+notes_c_hr);
        $(".price_vios").html(html_vios+notes_vios);
        $(".price_altis").html(html_altis+notes_altis);
        $(".price_camry").html(html_camry+notes_camry);
        $(".price_hilux").html(html_hilux+notes_hilux);
        $(".price_hi_ace").html(html_hi_ace+notes_hi_ace);
        $(".price_land_cruiser").html(html_land_cruiser+notes_land_cruiser);
        $(".price_alphard").html(html_alphard+notes_alphard);
        $(".price_vellfire").html(html_vellfire+notes_vellfire);
        $(".price_corolla_cross").html(html_corolla_cross+notes_corolla_cross);
        $(".price_voxy").html(html_voxy+notes_voxy);
        $(".price_sienta").html(html_sienta+notes_sienta);

    });
}