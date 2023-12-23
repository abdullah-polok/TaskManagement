
const CreateTask = () => {
    const handleCreateTask = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value
        const priority = form.priority.value
        const taskform = { title, description, deadline, priority }

        console.log(taskform)
    }
    return (
        <div className="bg-white p-8 rounded shadow-md w-full">
            <form onSubmit={handleCreateTask}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Title</label>
                    <input type="text" id="title" name="title" className="mt-1 p-2 w-full border rounded-md" />
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Description</label>
                    <textarea id="description" name="description" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Deadline</label>
                    <input type="date" id="deadline" name="deadline" className="mt-1 p-2 w-full border rounded-md" />
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Priority</label>
                    <select id="priority" name="priority" className="mt-1 p-2 w-full border rounded-md">
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;