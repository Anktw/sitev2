export async function getProjects(tech = "Recent") {
    try {
      // Using the environment variable
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
        {
          next: {
            revalidate: 3600 
          }
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
  
      const data = await response.json();
  
      if (tech === "Recent") {
        return data.sort((a, b) => b.id - a.id).slice(0, 3);
      } else {
        return data.filter((project) => project.techStack.includes(tech));
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  }
  