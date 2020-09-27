import {generate} from 'shortid';

export function generateIdForItems(list) {
    if (list) {
        return list.map(item => {
            return (
                { id: generate() , ...item}
            )
        })
    }
}
