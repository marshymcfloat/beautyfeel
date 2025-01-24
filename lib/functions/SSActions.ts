"use server";

const Voucher = require("../models/Voucher");

export async function checkVoucherValidity(voucherCode: string) {
  const foundVoucher = await Voucher.findOne({ code: voucherCode });
  if (foundVoucher) {
    return { valid: true, discount: foundVoucher.value };
  }
}

export async function submitCashierModal(route: string, body: {}) {
  const response = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("There is an error creating new transaction");
  }

  return await response.json();
}
