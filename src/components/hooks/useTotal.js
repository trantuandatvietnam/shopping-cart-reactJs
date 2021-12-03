
const useTotal = (cart) => {
    return cart.reduce((result, curr) => {
        return result + curr.price;
    }, 0)
};

export default useTotal;