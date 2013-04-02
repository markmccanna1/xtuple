/*jshint bitwise:true, indent:2, curly:true eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
trailing:true white:true*/
/*global XT:true, XM:true, _:true, enyo:true, Globalize:true*/

(function () {
  
  // ..........................................................
  // SALE TYPE
  //

  enyo.kind({
    name: "XV.SaleTypeListParameters",
    kind: "XV.ParameterWidget",
    components: [
      {name: "isActive", attr: "isActive", label: "_showInactive".loc(), defaultKind: "XV.CheckboxWidget",
        getParameter: function () {
          var param;
          if (!this.getValue()) {
            param = {
              attribute: this.getAttr(),
              operator: '=',
              value: true
            };
          }
          return param;
        }
      },
      {kind: "onyx.GroupboxHeader", content: "_saleTypes".loc()},
      {name: "code", label: "_code".loc(), attr: "code"},
      {name: "description", label: "_description", attr: "description"}
    ]
  });
  
  // ..........................................................
  // SHIP ZONE
  //

  enyo.kind({
    name: "XV.ShipZoneListParameters",
    kind: "XV.ParameterWidget",
    components: [
      {kind: "onyx.GroupboxHeader", content: "_shipZones".loc()},
      {name: "name", label: "_name".loc(), attr: "name"},
      {name: "description", label: "_description", attr: "description"}
    ]
  });
  
  // ..........................................................
  // TERMS
  //

  enyo.kind({
    name: "XV.TermsListParameters",
    kind: "XV.ParameterWidget",
    components: [
      {kind: "onyx.GroupboxHeader", content: "_Terms".loc()},
      {name: "code", label: "_code".loc(), attr: "code"},
      {name: "description", label: "_description", attr: "description"}
    ]
  });

}());
