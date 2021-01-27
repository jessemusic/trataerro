class app {
    constructor() {
        this.bind();
    }
    bind() {
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });
        debugger;
        document.querySelector('.sub-button').addEventListener('click', () => {
            this.handleClick(-1);
        });
    }
    handleClick(val) {
        const counterEl = document.querySelector('.counter');
        const value = parseInt(counterEl.innerText);

        counterEl.innerText = value + val;

    }
}

new app();



// class CustomError extends Error {
//     constructor({ message, data }) {
//         super(message);
//         this.data = data;
//     }
// }
// try {
//     const name = 'Jesse';

//     const myError = new CustomError({
//         message: 'Custom message on custom error',
//         data: {
//             type: 'Server error'
//         }
//     });
//     throw myError;
// } catch (err) {
//     console.log(err);
//     console.log(err.data);

// } finally {
//     console.log('Keep going...');
// }