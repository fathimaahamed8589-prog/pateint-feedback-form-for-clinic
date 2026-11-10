# Connecting the feedback form to Google Sheets

A Google Sheet has been created for you:

**Alsafa Clinic — Patient Feedback (Triplicane)**
https://docs.google.com/spreadsheets/d/1s2VrL_tmLWNt5bWylhF9sdqKtNIos93w_bwu2Nx730w/edit

Follow these steps once (about 2 minutes):

### 1. Open Apps Script from the sheet
In the sheet, click **Extensions → Apps Script**.

### 2. Paste the script
Delete whatever is in the editor and paste the full contents of
`apps-script/Code.gs` from this repo. Save (disk icon).

### 3. Deploy as a Web App
- Click **Deploy → New deployment**.
- Click the gear icon → choose **Web app**.
- **Execute as:** Me (your Google account)
- **Who has access:** Anyone
- Click **Deploy**, authorize when prompted.
- Copy the **Web app URL** (ends in `/exec`).

### 4. Paste the URL into the form
Open `index.html` and set:

```js
const ENDPOINT_URL = 'https://script.google.com/.../exec';
```

That's it. Every submitted feedback form now lands as a new row in the
sheet (a `Responses` tab is created on the first submission with proper
headers).

### Notes
- Even without the endpoint configured, submissions are saved to the
  patient's browser localStorage as a backup.
- You can host `index.html` anywhere (GitHub Pages, Netlify, or just
  open the file locally). For patients to use it from their phones, host
  it and generate a QR code to the URL.
