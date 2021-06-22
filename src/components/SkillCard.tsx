import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
