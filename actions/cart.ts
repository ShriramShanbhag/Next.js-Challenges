'use server'
export async function addToCart(productId: String) {
    return new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            console.log(`Adding ${productId} to cart...`)
            resolve({status: 200})
        }, 5000)
    })
}