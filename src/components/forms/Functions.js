import axios from 'axios';

const API = 'https://pochi-japan.herokuapp.com/api'

//Fetch all recommendations
export async function fetchAllRecs() {
    try {
        const res = await axios.get(API)
        return res.data
    } catch (err) {
        if (err.name !== 'CanceledError') {
            throw err;
        }
        return [];
    }
}

//Fetch by recommendation ID
export async function fetchRecById() {}

//Post a recommendation (require token)
export async function postRec(recData, jwtToken) {
    try {
			const res = await axios.post(API, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            });
            return res.data
		} catch (err) {
			if (err.name !== 'CanceledError') {
				throw err;
			}
			return [];
		}
}

//Edit a recommendation (require token)
export async function editRec() {}

//Delete a recommendation (require token)
export async function deleteRec() {}

//Fetch all users
//Sign up as a user (Post)
//Sign in as a user (Post)

//Fetch recommendations by userID (require token)
