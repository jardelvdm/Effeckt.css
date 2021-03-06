/**
 * modalEffects.js v1.1.0
 * http://www.codrops.com
 *
 * Rewritten for effeckts project
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var Modals = {

  overlay: $('#effeckt-overlay'),
  modalWrap: $("#effeckt-modal-wrap"),
  modal: $("#effeckt-modal"),
  modalStyle: "",

  init: function() {

    this.bindUIActions();

  }, 

  bindUIActions: function() {

    $(".modal2-button").on("click", function() {
      Modals.openModal(this);
    });

    $(".effeckt-modal-close").on("click", function() {
      Modals.closeModal(this);
    })

  },

  openModal: function(el) {

    var button = $(el);

    Modals.modalWrap.show();

    Modals.modalStyle = "md-effect-" + button.data("modal-type").replace(/[^0-9]/g, '');

    Modals.modalWrap.addClass(Modals.modalStyle);

    if (button.data("needs-perspective")) {
      $("html").addClass("md-perspective");
    }

    // Using timeout so we can set style first, then show it so animations/transitions work. You normally wouldn't need to do this.
    // This is problematic because timings should be controlled in CSS
    setTimeout(function() {
      Modals.modalWrap.addClass("effeckt-show");
    }, 300);

    Modals.showOverlay();

  },

  closeModal: function(el) {

    Modals.modalWrap.removeClass("effeckt-show");
    setTimeout(function() {
      Modals.modalWrap.removeClass(Modals.modalStyle);
      $("html").removeClass("md-perspective");
      Modals.modalWrap.hide();
    }, 300);

    Modals.hideOverlay();

  },

  showOverlay: function() {
    Modals.overlay.addClass("effeckt-show");
  },

  hideOverlay: function() {
    Modals.overlay.removeClass("effeckt-show");
  }

}

Modals.init();