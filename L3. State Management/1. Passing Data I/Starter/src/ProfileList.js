const ProfileList = ({profiles, users, movies}) => {
    console.log(profiles);
    console.log(users);
    console.log(movies);
    return <ul>
            {
            profiles.map(profile => {
                const user = users[profile.userID];
                const movie = movies[profile.favoriteMovieID];
                return (
                    <li key={profile.id}>
                        <p>{user.name}'s favorite movie is {movie.name}</p>
                    </li>
                )
            })
            }
    </ul>
}

export default ProfileList;