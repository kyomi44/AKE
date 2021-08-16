function TransferFunc() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var array = [26];

    var s0 = ss.getRange("Quote Builder!c2");
    var s1 = ss.getRange("Quote Builder!c3");
    var s2 = ss.getRange("Quote Builder!c6");
    var s3 = ss.getRange("Quote Builder!c4");
    var s4 = ss.getRange("Quote Builder!c5");
    var s5 = ss.getRange("Quote Builder!e45");
    var s6 = ss.getRange("Quote Builder!e47");
    var s7 = ss.getRange("Quote Builder!c13");
    var s8 = ss.getRange("Quote Builder!c12");
    var s9 = ss.getRange("Quote Builder!c21");
    var s10 = ss.getRange("Quote Builder!c20");
    var s11 = ss.getRange("Quote Builder!c26");
    var s12 = ss.getRange("Quote Builder!c27");
    var s13 = ss.getRange("Quote Builder!c28");
    var s14 = ss.getRange("Quote Builder!c29");
    var s15 = ss.getRange("Quote Builder!c30");
    var s16 = ss.getRange("Quote Builder!c31");
    var s17 = ss.getRange("Quote Builder!c32");
    var s18 = ss.getRange("Quote Builder!c33");
    var s19 = ss.getRange("Quote Builder!c34");
    var s20 = ss.getRange("Quote Builder!c35");
    var s21 = ss.getRange("Quote Builder!e37");
    var s22 = ss.getRange("Quote Builder!e39");
    var s23 = ss.getRange("Quote Builder!e41");
    var s24 = ss.getRange("Quote Builder!e43");
    var s25 = ss.getRange("Quote Builder!d43");

    /*
    for (let i = 0; i < 24; i++)
    {
        array[i] = 
    }
    */

    var destSheet = ss.getSheetByName("Automatic Quote Log");

    destSheet.appendRow(array);

}