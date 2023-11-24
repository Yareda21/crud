"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopicForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description is required!!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        console.log("Successfully posted");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      throw Error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-[650px] gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 bg-black/5 text-white"
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 bg-black/5 text-white"
        type="text"
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="bg-green-600 py-3 px-6 w-fit mx-auto font-bold text-white"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopicForm;
