import Image from "next/image";
import React from "react";

function PaymentForm() {
  return (
    <form className="rounded-3xl w-full bg-white sm:p-10 p-6 md:p-20 gap-4 flex flex-col ">
      <h1 className="text-xl font-bold">Payment summary</h1>
      <div className="flex lg:flex-row flex-col-reverse gap-4 w-full">
        <div className="flex flex-col w-full gap-4">
          <div className="rounded-xl bg-main p-4 w-full lg:w-4/5 flex-col gap-5 md:gap-10 md:p-8 flex justify-between">
            <div className="w-full flex justify-between items-center">
              <p className="text-xl">Ghana</p>
              <Image src={"/ghana.png"} width={48} height={48} alt="ghana" />
            </div>
            <div className="w-full flex justify-between items-end">
              <div className="flex gap-2 flex-col">
                <h1 className="text-2xl font-bold">10GB</h1>
                <p>Valid for 30 days</p>
              </div>
              <h1 className="text-2xl font-bold">$8.50</h1>
            </div>
          </div>
          <h1 className="font-bold text-xl">Billing Address</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="promo" className="font-light text-gray-700">
              Country
            </label>
            <select className="bg-gray-100 rounded-lg p-6 w-full text-sm text-gray-700">
              <option disabled value="Enter your country">
                Enter your country
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="first name" className="font-light text-gray-700">
              First name
            </label>
            <input
              type="text"
              placeholder="Enter your first name (Optional)"
              className="bg-gray-100 rounded-lg p-6 w-full text-sm text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="last name" className="font-light text-gray-700">
              Last name
            </label>
            <input
              type="text"
              placeholder="Enter your last name (Optional)"
              className="bg-gray-100 rounded-lg p-6 w-full text-sm text-gray-700"
            />
          </div>
          <div className="flex justify-between w-full gap-2 flex-col lg:flex-row">
            <div className="flex flex-col gap-1">
              <label htmlFor="City" className="font-light text-gray-700">
                City
              </label>
              <input
                type="text"
                placeholder="Ikeja"
                className="bg-gray-100 rounded-lg p-6 w-full text-sm text-gray-700"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="State" className="font-light text-gray-700">
                State
              </label>
              <input
                type="text"
                placeholder="Lagos"
                className="bg-gray-100 rounded-lg p-6 w-full text-sm text-gray-700"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="postal code" className="font-light text-gray-700">
                Postal code
              </label>
              <input
                type="text"
                placeholder="*****"
                className="bg-gray-100 rounded-lg p-6 w-full text-sm text-gray-700"
              />
            </div>
          </div>
          <div className="flex gap-2 text-lg">
            <input
              type="checkbox"
              className=" checked:bg-orange-500"
              name="save"
              id=""
            />
            Save my information for a faster checkout
          </div>
          <div className="bg-gray-200 w-full h-[1px] rounded-lg"></div>
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">Pay with:</h1>
            <div className="w-full flex justify-between">
              <div className="flex gap-2 items-center text-lg">
                <input
                  type="radio"
                  name="radio-group"
                  id="apple"
                  className="text-xl  "
                />
                Apple Pay
              </div>
              <Image
                width={50}
                height={50}
                src="https://img.icons8.com/ios-filled/50/apple-pay.png"
                alt="apple-pay"
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex gap-2 items-center text-lg">
                <input
                  type="radio"
                  name="radio-group"
                  id="card"
                  className="  bg-orange-400 text-xl "
                />
                Card
              </div>
              <Image
                width={50}
                height={50}
                src="https://img.icons8.com/color/48/visa.png"
                alt="visa"
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex gap-2 items-center text-lg">
                <input
                  type="radio"
                  name="radio-group"
                  id="Paypal"
                  className="bg-orange-400 text-xl "
                />
                Paypal
              </div>
              <Image
                width={50}
                height={50}
                src="https://img.icons8.com/color/48/paypal.png"
                alt="paypal"
              />
            </div>
          </div>
          <div className="bg-gray-200 w-full h-[1px] rounded-lg"></div>
          <button className="bg-orange-400 hover:bg-orange-600 text-white p-4 text-center w-full rounded-sm">
            Complete Purchase
          </button>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex gap-8">
            Select currency:
            <select
              name="currency"
              id="currency"
              className="px-4 py-1 border-gray-500 border-[1px]"
            >
              <option value="USD">USD</option>
              <option value="EU">EU</option>
              <option value="TND">TND</option>
              <option value="KWD">KWD</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="promo" className="font-light text-gray-700">
              Add Promo Code
            </label>
            <div className="bg-gray-100 p-3 w-full rounded-lg flex justify-between">
              <input
                type="text"
                placeholder="Referral or promo code"
                className="bg-gray-100 pl-2  w-full text-sm text-gray-700"
              />
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-2 text-center rounded-sm">
                Redeem
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PaymentForm;
