(() => {
    
    const fullName = ( firstName: string, ...restoArgs: string[] ):string => {
        return `${firstName} ${restoArgs.join(' ')}`;
    }
    
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
    
})();