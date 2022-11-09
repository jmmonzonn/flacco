import React from "react"
import Logo from "./components/Logo"
import Search from "./components/Search"
import Button from "./components/Button"
import { dataButtons } from "./components/data/buttons"

export default function Navbar() {
    return (
        <>
            <div
                className=" 2xl:visible xl:visible lg:visible md:visible sm:visible sm2:invisible sm3:invisible  fixed top-0 left-0 bottom-0 w-1/6 p-2  overflow-y-auto text-center bg-gray-900 opacity-60 "
            >
                {/* <Logo /> */}
                {/* <Search /> */}
                {dataButtons.map((value, index )=> {
                    return <Button text={value.text} route={value.route} key={index} />
                })}
                {/* <div className="my-4 bg-gray-600 h-[1px]"></div> */}
            </div>
        </>

    )
}