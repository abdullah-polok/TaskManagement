import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import './styles.css'
import imag from '../../assets/istockphoto-1210939712-612x612.jpg'
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
    const { user } = useContext(AuthContext)
    const [tasks, setTasks] = useState([]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/alltasks/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }




    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    console.log(user)

    return (
        <div className='flex gap-10'>
            <div className="w-64 min-h-screen bg-primary text-white">
                <div className="avatar flex justify-center py-5">
                    <div className="w-32 rounded-full">
                        <img src={user.photoURL ? user.photoURL : imag} />
                    </div>
                </div>
                <div className="px-5">
                    <h3 className='text-sm'>Name : {user.displayName
                    }</h3>
                    <p className='text-sm'>Email : {user.email}</p>
                    <p className='text-sm'>Email Verified : {user.emailVerified ? "True" : "False"} </p>
                    <p className='text-sm'>Phone Number : {user.phoneNumber ? user.phoneNumber : "Null"} </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                <div id='left'>
                    <h2 className='text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-4 text-xl border-b-2'>To do list</h2>
                    <hr />
                    {
                        tasks.map(task => <div key={task._id} className='list flex items-center justify-between text-center bg-primary text-white shadow-lg shadow-gray-300 m-2 rounded-md p-1 text-lg border-b-2' draggable="true">
                            <h2 className='text-center ml-1/2'>{task.title}</h2>
                            <button onClick={() => handleDelete(task._id)} className='btn  btn-error btn-xs text-red-700'>X</button>
                        </div>)
                    }

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