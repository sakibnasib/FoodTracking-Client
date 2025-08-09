import React from 'react';
import Heading from '../Heading/Heading';

const Faqs = () => {
    return (
        <section className="bg-[#8daa91] text-gray-800 mt-10 rounded-2xl">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 "><Heading text={"Frequently Asked Questions"}/></h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
			<details>
				<summary className="py-2 text-[1.4rem] outline-none cursor-pointer focus:underline">1.What is SafeBite and how does it help me?</summary>
				<div className="px-4 pb-4">
					<p>🟢 SafeBite is a web app that helps you track your food items and get timely alerts before they expire. This reduces food waste, saves money, and ensures your meals are always fresh and safe to eat.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">2. How do I add food items to SafeBite?</summary>
				<div className="px-4 pb-4">
					<p>🟢 Once you're logged in, go to the “Add Food” page. Fill in details like food name, category, quantity, expiry date, and description. The system automatically records the added date and links the item to your account.</p>
				</div>
			</details>
            <details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">3. Will I get notified when food is about to expire?</summary>
				<div className="px-4 pb-4">
					<p>🟢 Yes! SafeBite highlights nearly expired items (within 5 days of expiry) on your home page, so you can prioritize them. You’ll also see expired items clearly marked on the Fridge page.</p>
				</div>
			</details>
            <details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">4. Can I update or delete a food item after adding it?</summary>
				<div className="px-4 pb-4">
					<p>🟢 Yes, on the "My Items" page, you can easily update food details using a modal form or delete them after confirmation.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">5. Is my data secure with SafeBite?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>🟢 Absolutely. SafeBite uses JWT-based authentication and environment-secured Firebase and MongoDB configurations. Only authorized users can access or modify their own data.</p>
				</div>
			</details>
		</div>
	</div>
</section>
    );
};

export default Faqs;