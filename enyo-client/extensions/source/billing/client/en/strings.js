/*globals XT */

(function () {

  var lang = XT.stringsFor("en_US", {

    // ********
    // Labels
    // ********

    "_accountsReceivable": "Accounts Receivable",
    "_autoCloseARIncident": "Auto Close Incidents when Invoid Paid",
    "_autoCreditWarnLateCustomers": "Credit warn Customers when Late",
    "_billing": "Billing",
    "_billingDescription": "Corporate Relationship Management",
    "_creditTaxDiscount": "Credit Taxes for Early Payment Discounts",
    "_customerDeposit": "Customer Deposit",
    "_defaultARIncidentStatus": "Default Incident Category",
    "_defaultAutoCreditWarnGraceDays": "Default Grace Period Days",
    "_editAROpenItem": "Edit Receivables",
    "_enableCustomerDeposits": "Enable Customer Deposits",
    "_hideApplyToBalance": "Hide 'Apply to Balance' Action",
    "_salesCategory": "Sales Category",
    "_salesCategories": "Sales Categories",
    "_maintainMiscInvoices": "Maintain Invoices",
    "_maintainSalesCategory": "Maintain Sales Category",
    "_nextARMemoNumber": "Next Receivables Memo",
    "_nextCashRcptNumber": "Next Cash Receipt",
    "_receivable": "Receivable",
    "_receivables": "Receivables",
    "_recurringInvoiceBuffer": "Recurring Invoice Buffer Days",
    "_viewAROpenItems": "View Receivables",
    "_viewMiscInvoices": "View Invoices"
  });

  if (typeof exports !== 'undefined') {
    exports.language = lang;
  }
}());
