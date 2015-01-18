/* ##############################################            */
/* MONSTA FTP by MONSTA APPS                                */
/* ##############################################            */
/*                                                             */
/* This file is part of Monsta FTP. Please see index.php    */
/* for copyright, license and support details.                */

/* General Format */

    body, td, input, select {
        font-family: arial, helvetica, sans-serif;
    }

    body {
        font-size: 105%;
        line-height: 20px;
        margin: 0;
        padding: 0;
    }
    
    hr {
        height: 1px;
        margin-bottom: 25px;
        margin-top: 25px;
    }
    
    input {
        font-size: 100%;
    }
    
    select {
        font-size: 105%;
        line-height: 20px;
    }
    
    td {
        font-size: 105%;
        line-height: 20px;
    }
    
/* Floats */

    .floatLeft {
        float: left;
    }
    
    .floatLeft10 {
        float: left;
        margin-right: 10px;
    }
    
    .floatRight {
        float: right;
    }

/* Other */

    #ajaxContentWindow {
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-top-style: solid;
        border-top-width: 2px;
        overflow: auto;
    }
    
    /* Credit to www.robertnyman.com */
    #blackOutDiv {
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000)"; /* IE8 */
        background: rgb(0, 0, 0); /* Fallback for web browsers that don't support RGBa */
        background: rgba(0, 0, 0, 0.6); /* RGBa with 0.6 opacity */
        cursor: default;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);
        height: 100%;
        left: 0px;
        position: absolute;
        top: 0px;
        width: 100%;
        z-index: 1;
    }
    
    #btnLogin {
        padding-left: 40px;
        padding-right: 40px;
    }
    
    .checkboxChmod {
        float: left;
        margin-right: 20px;
    }
    
    #contextMenu {
        -moz-box-shadow: 2px 2px 3px #6D6D6D;
        -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4,Direction=135,Color=#6D6D6D)";
        -webkit-box-shadow: 2px 2px 3px #6D6D6D;
        border-style: solid;
        border-width: 1px; 
        box-shadow: 2px 2px 3px #6D6D6D;
        cursor: default;
        filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4,Direction=135,Color=#6D6D6D);
        font-size: 11pt;
        padding: 6px 0px 6px 0px;
        position: absolute;        
    }
    
    .contextMenuDiv {
        padding: 4px 30px 4px 15px;
    }
    
    .contextMenuDivInactive {
        padding: 4px 15px 4px 15px;
        width: 110px;
    }
    
    .contextMenuDivider {
        border-top-style: solid;
        border-top-width: 1px;
        margin: 5px 0px 5px 0px;
    }
    
    .contextMenuDivMouseOver {
        padding: 4px 15px 4px 15px;
        width: 110px;
    }
    
    .cursorPointer {
        cursor: pointer;
    }
    
    #dropFilesCheckDiv {
        display: inline;
    }
    
    #editContent { 
        border-style: solid;
        border-width: 1px;
        padding: 10px 0px 10px 10px;
        resize: none;
        width: 99%;
    }
    
    .fieldsetChmod {
        margin-bottom: 10px;
        padding: 10px;
    }
    
    #footerDiv {
        height: 40px;
        padding: 20px 20px 20px 10px;
    }
    
    #ftpActionButtonsDiv {
        border-top-style: solid;
        border-top-width: 1px;
        height: 45px;
        padding: 20px 20px 20px 10px;
    }
    
    #ftpActionForm {
        margin: 0px;
        padding: 0px;
    }
    
    #ftpHistorySelect {
        border: none;
        width: 100%;
    }
    
    #ftpTable {
        border-top-style: solid;
        border-top-width: 2px;
    }
    
    .ftpTableHeading {
        border-left-style: solid;
        border-left-width: 2px;
    }
    
    #hostInfoDiv {
        border-style: solid;
        border-width: 2px;
        border-radius: 5px;
            -webkit-border-radius: 5px;
        float: right;
        font-size: 70%;
        font-weight: bold;
        margin-right: 20px;
        padding: 7px 7px 7px 3px;
    }
    
        #hostInfoDiv span {
            font-weight: bold;
            padding-left: 7px;
            padding-right: 3px;
        }
        
    .inputButton {
        padding: 5px;
        width: 130px;
    }
    
    .inputButtonNf {
        padding: 5px 10px 5px 10px;
    }
    
    .inputRename {
        margin-bottom: 5px;
        width: 470px;
    }
    
    #loginForm {
        border-style: solid;
        border-width: 2px;
        margin: 100px;
        width: 475px;
    }
    
    #loginFormContent {
        padding: 20px;
    }
    
    #loginFormError {
        border-style: solid;
        border-width: 2px;
        margin-bottom: 20px;
        padding: 10px;
    }
    
    #loginFormTitle {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        font-weight: bold;
        padding: 10px;
    }
    
    #newFile {
        width: 300px;
    }
    
    #newFolder {
        width: 300px;
    }
    
    .popUpBtn {
        margin-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    #popupFrame {
        border-width: 2px;
        border-style: solid;
        position: absolute;
    }
    
    #popupBodyAction {
        border-left-width: 8px;
        border-left-style: solid;
        border-right-width: 8px;
        border-right-style: solid;
        line-height: 25px;
        overflow: auto;
        padding: 0px 15px 0px 15px;
    }
    
    #popupBodyError {
        border-left-width: 8px;
        border-left-style: solid;
        border-right-width: 8px;
        border-right-style: solid;
        line-height: 25px;
        overflow: auto;
        padding: 0px 15px 0px 15px;
    }
    
    #popupFooterAction {
        border-bottom-width: 8px;
        border-bottom-style: solid;
        border-left-width: 8px;
        border-left-style: solid;
        border-right-width: 8px;
        border-right-style: solid;
        padding: 15px;
    }
    
    #popupFooterError {
        border-bottom-width: 8px;
        border-bottom-style: solid;
        border-left-width: 8px;
        border-left-style: solid;
        border-right-width: 8px;
        border-right-style: solid;
        padding: 15px;
    }
    
    #popupHeaderAction {
        border-left-width: 8px;
        border-left-style: solid;
        border-right-width: 8px;
        border-right-style: solid;
        border-top-width: 8px;
        border-top-style: solid;
        font-weight: bold;
        padding: 15px;
    }
    
    #popupHeaderError {
        border-left-width: 8px;
        border-left-style: solid;
        border-right-width: 8px;
        border-right-style: solid;
        border-top-width: 8px;
        border-top-style: solid;
        font-weight: bold;
        padding: 15px;
    }
    
    .progressBar {
        float: left;
        margin-left: 10px;
    }
    
    .progressClose {
        border-style: solid;
        border-width: 1px;
        cursor: pointer;
        padding: 0px 3px 0px 3px;
    }
    
    #repeatUploadDiv { 
        float: left;
    }
    
    .uploadHiddenDiv {
        height: 0px;
        overflow: hidden;
        width: 0px;
    }
    
    #uploadProgressDiv {
        border-bottom-style: solid;
        border-bottom-width: 2px;
        height: 188px;
        overflow: auto;
        width: 100%;
    }
    
    .width100pc {
        width: 100%;
    }
