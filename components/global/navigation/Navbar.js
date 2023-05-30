import Link from "next/link";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

import { HorizontalNavigation } from "./Navigation";

import dynamic from "next/dynamic";
const MobileNavigation = dynamic(() => import("./MobileNavigation"));

import vietQWhite from "../../../public/logos/vietq_logo_white.png";
import vietQBlack from "../../../public/logos/vietq_logo_black.png";

import { useEffect, useState, Fragment } from "react";

import { useScrollData } from "scroll-data-hook";

import { Dialog, Transition } from "@headlessui/react";

import Image from "next/image";
import { FilledButton, OutlinedButton } from "../Button";

export default function Navbar({ transparent = false, preview = false }) {
  const { position } = useScrollData();

  const past = position.y > 100;

  const [open, setOpen] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      {open ? (
        <div
          className="fixed top-0 left-0 w-full h-full z-40 bg-black/25"
          onClick={() => setOpen(false)}
        />
      ) : null}
      <nav
        className={`${
          preview ? "pointer-events-none" : ""
        } fixed top-0 w-full transition-colors border-b z-50 ${
          transparent && !open
            ? past
              ? "text-blue-800 bg-champagne border-blue-900"
              : "text-white bg-champagne/0 border-transparent"
            : "text-blue-800 bg-champagne border-blue-900"
        } z-40`}
      >
        <div className="gradient h-2" />
        <div className="mx-auto max-w-6xl py-4 px-4 space-y-4">
          <div className="flex items-center justify-between space-x-16">
            <Link href="/">
              <Image
                src={
                  transparent && !open
                    ? past
                      ? vietQBlack
                      : vietQWhite
                    : vietQBlack
                }
                alt="VietQ Logo"
                className="w-16 hover:opacity-75 transition-opacity"
                priority={true}
              />
            </Link>
            <HorizontalNavigation noHome={true}>
              <button
                onClick={() => setShowDonate(true)}
                className={`${
                  transparent
                    ? past
                      ? "text-white bg-gray-900 hover:bg-gray-800"
                      : "text-gray-900 bg-white hover:bg-gray-300"
                    : "text-white bg-gray-900 hover:bg-gray-800"
                } uppercase tracking-widest text-xs rounded-full px-3.5 py-2 transition-colors font-semibold`}
              >
                Donate
              </button>
            </HorizontalNavigation>
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-end space-x-2"
              >
                <span className="uppercase font-semibold tracking-widest text-sm">
                  {open ? "Close" : "Menu"}
                </span>
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        <MobileNavigation open={open} />
      </nav>
      <DonateModal showDonate={showDonate} setShowDonate={setShowDonate} />
    </>
  );
}

function DonateModal({ showDonate, setShowDonate }) {
  function closeModal() {
    setShowDonate(false);
  }

  function openModal() {
    setShowDonate(true);
  }

  return (
    <Transition appear show={showDonate} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="space-y-4 w-full max-w-md text-center transform overflow-hidden font-sans rounded-3xl bg-champagne-50 p-6 border-champagne-700/25 align-middle shadow-xl transition-all">
                <Image
                  src={vietQBlack}
                  alt="VietQ Logo"
                  className="w-16 mx-auto"
                  priority={true}
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our donations are handled by the
                  <br />
                  API Chaya organization.
                </h3>
                <p className=" text-gray-700 font-medium">
                  When donating, make sure you mention{" "}
                  <span className="text-gray-900 font-bold underline">
                    "VietQ"
                  </span>{" "}
                  in the Comments section.
                  <br /> <br />
                  If you have any questions, please{" "}
                  <Link href="/contact" className="underline">
                    contact us
                  </Link>
                  .
                </p>
                <div className="space-x-2">
                  <a href="https://www.apichaya.org/give">
                    <FilledButton>Donate to VietQ</FilledButton>
                  </a>
                  <button onClick={() => setShowDonate(false)}>
                    <OutlinedButton>Go back</OutlinedButton>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
