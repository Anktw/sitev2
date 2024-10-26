export async function getProjects(tech = "Recent") {
    try {
      const response = await fetch(
        'http://localhost:3000/api/projects',
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