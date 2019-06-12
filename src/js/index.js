require("../scss/style.scss");
require("../index.html");
require("../images/icon.png");
require("../images/icon2.png");
require("../images/3.jpg");

import * as $ from "jquery/dist/jquery.min";
import * as mdc from "material-components-web";
import {MDCRipple} from "@material/ripple";
import {MDCChip, MDCChipSet} from "@material/chips";
import {MDCDialog} from "@material/dialog";


$(document).ready(function(){
    $(".toggler").on("click", function(){
        $(".Exitedbtn").toggleClass("mdc-fab--exited");
    });
    $(".iconToggle").each(function(){
        new mdc.iconButton.MDCIconButtonToggle(this);
    });
    $(".rippleEffect").each(function(){
        new MDCRipple(this);
    });
    $(".iconToggleRipple").each(function(){
        const iconToggleRipple = new MDCRipple(this);
        iconToggleRipple.unbounded = true;
    })
    $(".mdc-chip-set").each(function(index, element){
        new MDCChipSet(element);
    });
    $(".block").each(function(index, blockElement) {
        let showDialogBtn = $(blockElement).find(".showDialogBtn");
        let dialog = new MDCDialog($(blockElement).find(".mdc-dialog")[0]);
        showDialogBtn.on("click", function() {
          dialog.show();
        });
        dialog.listen("MDCDialog:accept", function() {
          console.log("Accepted");
        });
        dialog.listen("MDCDialog:cancel", function() {
          console.log("Cancelled");
        });
      });
});