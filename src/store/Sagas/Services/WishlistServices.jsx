export async function createService(action) {
   //"service req",action);
    var response = await fetch("http://localhost:8000/wishlist", {
        method: "post",
        headers: {
            "content-type": "application/json"

        },
        body: JSON.stringify(action.payload)

    })
    response= await response.json()
    return response
}


export async function getService() {
    var response = await fetch("http://localhost:8000/wishlist", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }

    })
    response= await response.json()
    return response
}

export async function deleteService(action) {
    var response = await fetch("http://localhost:8000/wishlist/"+action.payload.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"

        }

    })

    response= await response.json()
    return response
}