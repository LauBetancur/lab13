export const getCharacter = async () => {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    return data.data;
  };
    
  export const characterById = async (id) => {
    const characters = await getCharacter();
  
    for (const item of characters){
      if(item.uuid === id) {
        return item;
      }
    }
  
    throw new Error ("Character not found");
  };
  