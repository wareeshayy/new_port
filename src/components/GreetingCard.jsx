
import React, { useState, useEffect } from 'react';
export default function GreetingCard() {
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) { setGreeting('GoodMorning☀️'); }
        else if (hour >= 12 && hour < 17) {
            setGreeting('GoodAfternoon 🌤️');
        }
        else if (hour >= 17 && hour < 21) {
            setGreeting('GoodEveninhg');
        }
        else {
            setGreeting('GoodNight🌙');
        }

    }, []);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">👋Welcome to Snippverse</h2>
            <p className="text-2xl font-bold text-gray-800">{greeting}</p>
        </div>

    );
}



/* | Class Name    | Matlab (Roman Urdu)                                                                           |
| ------------- | --------------------------------------------------------------------------------------------- |
| `bg-white`    | Background color **white** set kar deta hai (component ka background safed ho jata hai).      |
| `p-6`         | **Padding all sides** se deta hai. `6` ka matlab hota hai approx `1.5rem` har side se.        |
| `rounded-2xl` | **Borders ko gol** kar deta hai – yeh `extra large` rounding deta hai. Stylish look.          |
| `shadow-xl`   | **Extra large shadow** add karta hai component ke neeche – isse card elevated nazar aata hai. |
| `w-full`      | Width ko **100%** kar deta hai – jitni jagah available ho utni le lega.                       |
| `max-w-sm`    | Lekin width ka **maximum size small (sm)** tak limit kar deta hai – taake responsive rahe.    |
| `text-center` | Andar ka sara text **center aligned** hota hai horizontally.                                  |
 */