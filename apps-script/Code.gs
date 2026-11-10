/**
 * Alsafa Skin & Hair Clinic — Patient Feedback endpoint.
 *
 * Setup:
 * 1. Open your Google Sheet and go to Extensions -> Apps Script.
 * 2. Replace the default code with this file's contents.
 * 3. Save, then Deploy -> New deployment -> Type: Web app.
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the Web app URL and paste it into index.html as ENDPOINT_URL.
 */

const SHEET_NAME = 'Responses';

const HEADERS = [
  'Timestamp', 'Name', 'Phone', 'Visit Date', 'Procedure', 'Doctor',
  'Doctor Approach (1-5)', 'Procedure Explanation (1-5)',
  'Info Conveyed Rightly', 'Affordability', 'Painless',
  'Post-Care Ease (1-5)', 'Infrastructure (1-5)', 'Receptionist (1-5)',
  'Overall (1-10)', 'Would Recommend', 'Comments'
];

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.visitDate || '',
    data.procedure || '',
    data.doctor || '',
    data.docApproach || '',
    data.docExplain || '',
    data.conveyedRight || '',
    data.affordable || '',
    data.painless || '',
    data.postCare || '',
    data.infra || '',
    data.reception || '',
    data.overall || '',
    data.recommend || '',
    data.comments || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Alsafa feedback endpoint is live.');
}
