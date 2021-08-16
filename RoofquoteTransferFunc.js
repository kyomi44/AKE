function TransferFunc() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    const array = [];

    array[0] = ss.getRange("Quote Builder!c2").getValue();
    array[1] = ss.getRange("Quote Builder!c3").getValue();
    array[2] = ss.getRange("Quote Builder!c6").getValue();
    array[3] = ss.getRange("Quote Builder!c4").getValue();
    array[4] = ss.getRange("Quote Builder!c5").getValue();
    array[5] = ss.getRange("Quote Builder!e45").getValue();
    array[6] = ss.getRange("Quote Builder!e47").getValue();
    array[7] = ss.getRange("Quote Builder!c13").getValue();
    array[8] = ss.getRange("Quote Builder!c12").getValue();
    array[9] = ss.getRange("Quote Builder!c21").getValue();
    array[10] = ss.getRange("Quote Builder!c20").getValue();
    array[11] = ss.getRange("Quote Builder!c26").getValue();
    array[12] = ss.getRange("Quote Builder!c27").getValue();
    array[13] = ss.getRange("Quote Builder!c28").getValue();
    array[14] = ss.getRange("Quote Builder!c29").getValue();
    array[15] = ss.getRange("Quote Builder!c30").getValue();
    array[16] = ss.getRange("Quote Builder!c31").getValue();
    array[17] = ss.getRange("Quote Builder!c32").getValue();
    array[18] = ss.getRange("Quote Builder!c33").getValue();
    array[19] = ss.getRange("Quote Builder!c34").getValue();
    array[20] = ss.getRange("Quote Builder!c35").getValue();
    array[21] = ss.getRange("Quote Builder!e37").getValue();
    array[22] = ss.getRange("Quote Builder!e39").getValue();
    array[23] = ss.getRange("Quote Builder!e41").getValue();
    array[24] = ss.getRange("Quote Builder!e43").getValue();
    array[25] = ss.getRange("Quote Builder!d43").getValue();
  
    
    /*
    for (let i = 0; i < 24; i++)
    {
        array[i] = 
    }
    */

    var destSheet = ss.getSheetByName("Automatic Quote Log");

    destSheet.appendRow(array);

}