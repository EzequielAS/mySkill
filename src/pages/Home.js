import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  Platform,
  StyleSheet,
  FlatList,
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'


export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    if(newSkill === '')
      return

    setMySkills(oldSkills => [...oldSkills, newSkill])
    setNewSkill('')
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    
    if(currentHour < 13) setGreeting('Good Morning')
    else if(currentHour >= 13 && currentHour < 18) setGreeting('Good Afternoon')
    else setGreeting('Good night')
  }, [])


  return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Welcome, Ezequiel
        </Text>

        <Text style={styles.greetings}>
          { greeting }
        </Text>

        <TextInput 
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          value={newSkill}
          onChangeText={setNewSkill}
        />    

        <Button 
          onPress={handleAddNewSkill}
        />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>
        
        <FlatList
          data={mySkills}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => (
            <SkillCard 
              key={item}
              skill={item}
            />
          )}
        />

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1525',
    width: '100%',
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
    padding: Platform.OS === 'ios' ? 15 : 12,
    color: '#FFF',
  },
  greetings: {
    color: '#FFF',
  }
})
