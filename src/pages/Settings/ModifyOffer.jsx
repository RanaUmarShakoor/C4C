import clsx from "clsx";
import React from "react";
import { Navbar } from "components/Navbar";
import { Container } from "components/Container";

import { Input, TextArea } from "./common";
import { Link } from "react-router-dom";

export function ModifyOffer() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} login={true} />
      <Container className="flex-1 flex justify-center gap-10 relative z-0">
        <section
          style={{ fontFamily: "Prompt" }}
          className="p-4 flex-1 rounded-2xl shadow-customBlack"
        >
          <h1 className="text-2xl md:mt-12 font-medium max-md:text-center">Modify the offer</h1>
          <img src="/settings-clean.png" className="md:hidden mt-5 mx-auto" />

          <div className="mt-6 grid md:grid-cols-2 gap-y-6 gap-x-6">
            <Input
              label="The name of the ad"
              placeholder="Potrebujem upratať 4-izbový byt"
            />
            <Input
              label="Price for cleaning"
              placeholder="30"
              right={<p className="text-[#9A9A9A] px-2 border-l-2">€ / Hour</p>}
            />
            <Input
              label="Mobile Number"
              placeholder="0978 787 900"
              containerClass="max-md:row-[2/2]"
            />

            <TextArea
              label="More informations"
              defaultValue="Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8."
              containerClass="row-span-3"
            />

            <Input
              label="Address"
              placeholder="Trnava, Hlinkova 28"
              containerClass="max-md:row-[3/3]"
            />
          </div>

          <h1 className="text-xl mt-8 font-medium">Add Photos</h1>
          <div className="mt-5 flex md:items-end max-md:flex-col gap-y-4">
            <div className="flex flex-row gap-6 max-w-full overflow-scroll max-md:flex-col">
              {[...Array(3)].map(() => (
                <>
                  <img src="/add-offer.png" className="max-md:hidden" />
                  <img src="/add-offer-mobile.png" className="md:hidden" />
                </>
              ))}
            </div>

            <div className="flex-1" />

            <Link
              to="/nine"
              className={clsx(
                "py-3 px-5 text-center",
                "rounded-lg transition-colors",
                "border border-orange-500 text-orange-500",
                "hover:bg-orange-600 hover:text-white"
              )}
            >
              Cancel changes
            </Link>

            <button className="md:ml-8 py-3 px-5 blue-btn rounded-lg">
              Confirm changes
            </button>
          </div>
        </section>
      </Container>
    </main>
  );
}
