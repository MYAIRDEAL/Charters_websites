import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../componentCss/Admincss.css';

const ItemTypes = {
    COMPONENT: 'component',
};

const DraggableItem = ({ name, index, moveItem }) => {
    const [, ref] = useDrag({
        type: ItemTypes.COMPONENT,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.COMPONENT,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveItem(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className="draggable">
            {name}
        </div>
    );
};

function AdminPanel() {
    const [components, setComponents] = useState([]);

    useEffect(async () => {
        try {
            await axios.get('http://localhost:8000/api/components')
                .then(response => setComponents(response.data))
        } catch (error) {

            console.error(error);
        }
    }, []);

    const moveItem =  async (fromIndex, toIndex) => {
        const updatedComponents = Array.from(components);
        const [movedComponent] = updatedComponents.splice(fromIndex, 1);
        updatedComponents.splice(toIndex, 0, movedComponent);
        setComponents(updatedComponents);
        try {
            await axios.post('http://localhost:8000/api/components', updatedComponents)
                .then(response => console.log(response.data))
        }
        catch (error) {
            console.error(error);

        }
    };

    return (

        <div className='h-[100vh] flex flex-col items-center justify-evenly'>
            <h1 className='text-[2rem] text-center text-white'>Welcome to Admin Section Controller</h1>
            <DndProvider backend={HTML5Backend}>
                <div className="AdminPanel">
                    {components.map((componentId, index) => (
                        <DraggableItem
                            key={componentId}
                            name={componentId}
                            index={index}
                            moveItem={moveItem}
                        />
                    ))}
                </div>
            </DndProvider>
        </div>
    );
}

export default AdminPanel;