import React from 'react'
import Image from 'next/image'

const first_text = `With the deepest sorrow, the Tribe™ team announces the end of a project that was approached with immense love and affection. What we aimed to achieve was undoubtedly extremely ambitious, reaching far beyond a mere clothing store—of which there are already thousands—and we refused to settle for mediocrity.`
const second_text = `Our primary goal was to test a hypothesis: "Can clothing be perceived as a physical asset?" We sought to explore this by selling items through the Tribe™ platform, Noah™. Our objective was to ensure what we coined as "full connection" and "item identity." In simpler terms, we aimed to provide each item with a digital identity, akin to a citizen card for physical objects. The idea was more significant than could be encapsulated in a brief text. While it may seem ordinary, the truth is that it's a fundamental concept supporting the first revolution of an age-old industry, annually generating nearly 2 trillion dollars—a concept we aspired to test but, unfortunately, could not develop in time.`
const thrid_text = `Speaking solely of the store's issues, we undoubtedly failed to demonstrate the professional capacity to manage the business correctly. Firstly, we failed to react to a common problem affecting many businesses: we expanded beyond our managerial capabilities, significantly limiting us. Despite being aware of this, we persisted with inventories that far exceeded our management capacity. At one point, our inventory reached a registered value exceeding €25,000, equivalent to approximately 200 items (mostly hoodies), and we lacked the infrastructure to handle such scale. Secondly, we couldn't resolve payment-related issues as we operated in a gray area in terms of tax regulations, compromising our store's functionality. Thirdly, we failed to meet the deadlines set for crucial internal tasks essential to the vision we aimed to impart to Tribe™.`
const fourth_text = `Ultimately, the core failure of the Tribe™ project with Noah™ undoubtedly stemmed from a lack of discipline and commitment to a venture that demanded our utmost dedication. The team deeply regrets the outcome.`
const fifth_text = `Personally, I shoulder the entire responsibility for the project's failure and our inability to meet the expectations placed upon us.`

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
const monthName = months[new Date().getMonth()];
const year = today.getFullYear();
const date = today.getDate();
const dateName = dayNames[new Date().getDay()];
var min = null
if (today.getMinutes() < 10){
  min = "0" + today.getMinutes()  ;
} else {
  min = today.getMinutes();
}
const hour = today.getHours();
const timeZone = today.getTimezoneOffset();
const currentDate = monthName + " " + date + ", " + year;
const currentTime = hour + ":" + min

const page = () => {
  return (
    <div className="w-screen flex bg-white justify-center">
      <div className="flex flex-col items-center text-black mt-28 md:mt-20">
        <Image
          src="/TribeLogo.png"
          width={100} 
          height={200}
          alt="Tribe Logo"  
        />
        <p className="text-xs font-light tracking-wider mt-2">Lisbon | {dateName}, {currentDate} | {currentTime} WET </p>
        <h1 className="text-start font-semibold mt-12 md:mt-10">Disclosure Statement</h1>

        <div className="flex flex-col space-y-2 mt-4">
          <p className=" text-xs font-light tracking-wider max-w-2xl px-5">{first_text}</p>
          <p className=" text-xs font-light tracking-wider max-w-2xl px-5">{second_text}</p>
          <p className=" text-xs font-light tracking-wider max-w-2xl px-5">{thrid_text}</p>
          <p className=" text-xs font-light tracking-wider max-w-2xl px-5">{fourth_text}</p>
          <p className=" text-xs font-light tracking-wider max-w-2xl px-5">{fifth_text}</p>
          <div className="flex w-full justify-end px-5 text-end">
            <h1 className="text-xs font-normal tracking-wider">Head Responsible, Rafael Galo</h1>
          </div>

        </div>

        <div className="flex h-32 md:h-14">
          
        </div>

      </div>
    </div>
  )
}

export default page



