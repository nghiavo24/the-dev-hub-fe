import React from "react";

export default function PostingCreate() {
    
    const [form, setForm] = useState({
        topic: "",
        comments: "",
        image: "",
      });
      const navigate = useNavigate();
    
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      async function onSubmit(e) {
        e.preventDefault();
        const newPosting = { ...form };
        const update = await axios.post(
          'https://sports-discord.fly.dev/api/topics',
          newPosting
        );
        setForm({ topic: "", comments: "", image: "" });
        navigate("/");
      }

    return(
        <div>
            Here we will create the PostingCreate
        </div>
    )
}