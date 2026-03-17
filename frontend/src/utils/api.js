const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(formData) {
    const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if(!response.ok) {
        throw new Error ("Erro ao enviar mensagem");
    }
    return response.json();
}


