import React from "react";

function Appoinment() {
    return(
        <div >
            <div class="rounded-lg shadow-md  ml-40 mr-40 mt-10">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Recent Items</h2>
                <a href="#" class="text-blue-500 hover:text-blue-700 text-sm font-medium">
                View All
                </a>
            </div>

            
            <ul class="space-y-3">
                <li class="p-3 border rounded-md hover:bg-gray-50">
                Item 1
                </li>
                <li class="p-3 border rounded-md hover:bg-gray-50">
                Item 2
                </li>
                <li class="p-3 border rounded-md hover:bg-gray-50">
                Item 3
                </li>
                <li class="p-3 border rounded-md hover:bg-gray-50">
                Item 4
                </li>
            </ul>

            </div>
        </div>
    )
}

export default Appoinment;