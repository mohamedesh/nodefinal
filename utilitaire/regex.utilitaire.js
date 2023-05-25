export const validateEmail = (email) => {
    //va vérifier si une chaîne de caractères donnée contient un nom d'utilisateur, un symbole '@', un nom de domaine, un point '.' et une extension, tout en n'autorisant pas les espaces dans cette chaîne.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
}

