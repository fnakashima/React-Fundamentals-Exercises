const ProfileList =  ({profiles, users, movies}) => {
    // convert json object to array
    let movieList = Object.values(movies);
    console.log(movieList);
    return <ul>
        {
            movieList.map(movie => {
                console.log(movie);
                const targetUserProfiles = profiles.filter(profile => parseInt(profile.favoriteMovieID,10) === movie.id);
                console.log(`${movie.name} has ${targetUserProfiles.length} likes`);
                let description;
                if(targetUserProfiles.length === 0) {
                    description = "None of the current users liked this movie";
                } else{
                    description = targetUserProfiles.map(profile => users[profile.userID].name).join(", ");
                }
                return (<li key={movie.id}>
                    <h2>{movie.name}</h2>
                    <p>{description}</p>
                </li>)
            })
        }
    </ul>
}

export default ProfileList;