"use client";

import { FilledButton, OutlinedButton } from "../Button";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

import vietQBlack from "@/public/logos/vietq_logo_black.png";

import Image from "next/image";

export default function DonateModal({ showDonate, setShowDonate }) {
  function closeModal() {
    setShowDonate(false);
  }

  function openModal() {
    setShowDonate(true);
  }

  return (
    <Transition appear show={showDonate} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="space-y-4 w-full max-w-md text-center transform overflow-hidden font-sans rounded-3xl bg-champagne-50 px-6 py-12 border-champagne-700/25 align-middle shadow-xl transition-all">
                <Image
                  src={vietQBlack}
                  alt="VietQ Logo"
                  className="w-16 mx-auto"
                  priority={true}
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our donations are handled by the
                  <br className="hidden md:block" /> White Center CDA.
                </h3>
                <p className=" text-gray-700 font-medium">
                  When donating, make sure you select{" "}
                  <span className="text-gray-900 font-bold">"VietQ"</span>.
                  <br /> <br />
                  If you have any questions, please{" "}
                  <Link href="/contact" className="underline">
                    contact us
                  </Link>
                  .
                </p>
                <div className="space-x-2">
                  <a href="/donate">
                    <FilledButton>Donate to VietQ</FilledButton>
                  </a>
                  <button onClick={() => setShowDonate(false)}>
                    <OutlinedButton>Go back</OutlinedButton>
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
