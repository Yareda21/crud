"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to Update topic");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col max-w-[650px] gap-3"
    >
      <input
        className="border border-slate-500 px-8 py-2 bg-black/5 text-white"
        type="text"
        placeholder="Topic Title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <input
        className="border border-slate-500 px-8 py-2 bg-black/5 text-white"
        type="text"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="bg-green-600 py-3 px-6 w-fit mx-auto font-bold text-white"
      >
        Update Topic
      </button>
    </form>
  );
}
