"use server"

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constant";
import { FormState, SignUpFormSchema } from "./type";

export async function signUp(state: FormState,formData: FormData):Promise <FormState> {
    const validationFields = SignUpFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!validationFields.success) {
        return{
            error: validationFields.error.flatten().fieldErrors,
        }
    }
    const response = await fetch(`${BACKEND_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validationFields.data),
    });
    if (response.ok) {
        
        redirect("auth/login")
    }
    else
    return{
        message: response.status ===409 ? "User already exists" : response.statusText
    }
}