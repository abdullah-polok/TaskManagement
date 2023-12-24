import { useState } from 'react';
import './styles.css'

let lists = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")
let middleBox = document.getElementById("middle")

for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        leftBox.addEventListener("drop", function (e) {
            leftBox.appendChild(selected);
            selected = null
        })
        middleBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        middleBox.addEventListener("drop", function (e) {
            middleBox.appendChild(selected);
            selected = null
        })
        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        rightBox.addEventListener("drop", function (e) {
            rightBox.appendChild(selected);
            selected = null
        })
    })
}

const Dashboard = () => {


    return (
        <div className='flex gap-10'>
            <div className="w-64 min-h-screen bg-primary text-white">
                <div className="avatar flex justify-center py-5">
                    <div className="w-32 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="px-5">
                    <h3>Name:</h3>
                    <p>Email:</p>
                    <p>Gender:</p>
                    <p>Type:</p>
                    <p>Profession:</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                <div id='left'>
                    <h2 className='text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-4 text-xl border-b-2'>To do list</h2>
                    <hr />
                    <div className='list text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-1 text-lg border-b-2' draggable="true">
                        List Item 1
                    </div>
                    <div className='list text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-1 text-lg border-b-2' draggable="true">
                        List Item 2
                    </div>
                    <div className='list text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-1 text-lg border-b-2' draggable="true">
                        List Item 3
                    </div>
                    <div className='list text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-1 text-lg border-b-2' draggable="true">
                        List Item 4
                    </div>
                </div>
                <div id='middle'>
                    <h2 className='text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-4 text-xl border-b-2'>Ongoing</h2>
                    <hr />
                </div>
                <div id='right'>
                    <h2 className='text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-4 text-xl border-b-2'>Completed</h2>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;