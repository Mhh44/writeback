
$(document).ready(function() {
async function start() 
    { try {
 
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const creds = require('https://github.com/Mhh44/writeback/blob/master/creds.json'); // the file saved above
    const doc = new GoogleSpreadsheet('1rdFyrXRJ15VdAltjDzQCcw7SLVcoTcjwMa8P6ZwZ_jY');
    doc.useServiceAccountAuth(creds);
    await  (doc.loadInfo());
  
  
     const firstSheet = doc.sheetsByIndex[0];
     const addRow =  await firstSheet.addRow({ sheetSelected: 'Larry Page' });}
     catch (err) {
     console.log(err)
     const dataContainer = document.getElementById('messages').innerHTML=err.message;}}

const handleFormSubmit = event => {
event.preventDefault();
start()
}
const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);}
