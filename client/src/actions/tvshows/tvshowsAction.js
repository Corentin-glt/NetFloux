import * as requestApi from '../apiRequest';
import * as C from './actionTypes';
import {tvshowSerializer} from '../../serializers/tvshow';

export const createTvshowSuccess = (tvshow) => {
	return {
		type: C.CREATE_TVSHOW_SUCCESS,
		tvshow
	}
}; 

export const deleteTvshowSuccess = (tvshow) => {
	return {
		type: C.DELETE_TVSHOW_SUCCESS,
		tvshow
	}
};

export const fetchAllTvshowsSuccess = (tvshows) => {
	return {
		type: C.FETCH_TVSHOWS_SUCCESS,
		tvshows,
		imNotUser: true
	}
};

export const fetchAllTvshowsByUserSuccess = (tvshows) => {
	return {
		type: C.FETCH_TVSHOWS_SUCCESS,
		tvshows,
		imNotUser: false
	}
};

export const createTvshow = (tvshow) => {
	return (dispatch) => {
		const data = tvshowSerializer.serialize(tvshow);
		console.log("g serialize");
		return requestApi.postRequest('tvshows', data)
			.then(response => {
				console.log("post");
				return tvshowSerializer.deserialize(response.data)
					.then((response) => {
						dispatch(createTvshowSuccess(response));
						console.log("change detat");
					})
					.catch(err => {
						throw(err)
					});
			})
			.catch(err => {
				throw(err);
			})
	}
};

export const fetchAllTvshowsByUser = (user) => {
	console.log(user);
	return (dispatch) => {
		let filter = {simple: {users: {_id: user.id}}};
		return requestApi.getRequest('tvshows', filter, 'users')
			.then((response) => {
				const tvshowTab = [];
				return tvshowSerializer.deserialize(response.data)
					.then(response => {
						response.map(tvshow => {
							tvshowTab.push(tvshow);
						});
						dispatch(fetchAllTvshowsByUserSuccess(tvshowTab));
					})
					.catch(err => {throw(err)});
			})
			.catch(err => {throw(err)});
	}
};

export const fetchAllTvshows = () => {
	return(dispatch) => {
		return requestApi.getRequest('tvshows') //on fait la requete pour retrouver les series
			.then((response) => { //response = series
				const tvshowTab = []; //on cree un tableau afin  de faire une copie de la liste de serie
				return tvshowSerializer.deserialize(response.data)//on deserialize pour retrouver les data des series bien comme il le faut
					.then(response => { // les donnes des series sont donc stocke dans le nouveau tableau
						response.map(tvshow => {
							tvshowTab.push(tvshow);
						});
						dispatch(fetchAllTvshowsSuccess(tvshowTab)); //on envoie le nouveau tableau pour changer l'etat de l'ancien
					})
					.catch(err => {throw(err)});
			})
			.catch(err => {throw(err)});
	}
};

export const deleteTvshow = (tvshow) => {
	return(dispatch) => {
		return requestApi.deleteRequest('tvshows', tvshow.id)
			.then(() => {
				console.log('tvshow ' + tvshow.id + ' is delete');
				dispatch(deleteTvshowSuccess(tvshow));
			})
			.catch(err => {throw(err)});
	}
};

export const deleteAllTvshowOfUser = (tvshows) => {
  return (dispatch) => {
    tvshows.map(tvshow => {
      return requestApi.deleteRequest('tvshows', tvshow.id)
        .then(() => {
          console.log('Tvshow: ' + tvshow.id + ' deleted!');
          dispatch(deleteTvshowSuccess(tvshow));
        })
        .catch(err => {throw(err)});
    })
  }
};

