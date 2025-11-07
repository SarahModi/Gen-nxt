// Initialize Supabase
const { createClient } = supabase
const SUPABASE_URL = "https://your-project.supabase.co"
const SUPABASE_ANON_KEY = "your-anon-key"
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Example: fetch courses
async function loadCourses() {
  const { data, error } = await db.from("courses").select("*")
  if (error) {
    console.error(error)
    return
  }
  console.log("Courses:", data)
  // You can now display these on your website
}

loadCourses()
