import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { style as MainStyle } from '../style/MainTheme';
const Timeline = () => {
    const [activeEvents, setActiveEvents] = useState(events.filter(event => event.isActive));
  
    const toggleEventActivation = eventId => {
      const updatedEvents = activeEvents.map(event => {
        if (event.id === eventId) {
          return { ...event, isActive: !event.isActive };
        }
        return event;
      });
      setActiveEvents(updatedEvents);
    };

    const events = [
        {
            id: 1,
            title: 'Événement 1',
            description: 'Arrivée à la porte de Baldur',
            isActive: false,
        },
        {
            id: '2.1',
            title: 'Événement 2.1',
            description: 'Parler à la garde',
            isActive: true,
        },
        {
            id: '2.2',
            title: 'Événement 2.2',
            description: 'Parler à des personnes de la foule',
            isActive: true,
        },
        {
            id: 3,
            title: 'Événement 3',
            description: 'Explorer la place du marché',
            isActive: true,
        },
        {
            id: 4,
            title: 'Événement 4',
            description: 'Trouver un indice dans la taverne',
            isActive: false,
        },
        {
            id: 5,
            title: 'Événement 5',
            description: 'Rencontrer un mystérieux étranger',
            isActive: true,
        },
        {
            id: 6,
            title: 'Événement 6',
            description: 'Résoudre une énigme du temple',
            isActive: true,
        },
        {
            id: 7,
            title: 'Événement 7',
            description: 'Combattre des bandits dans les ruelles',
            isActive: true,
        },
        {
            id: 8,
            title: 'Événement 8',
            description: 'Négocier avec un marchand',
            isActive: false,
        },
        {
            id: 9,
            title: 'Événement 9',
            description: 'Trouver un trésor caché',
            isActive: true,
        },
        {
            id: 10,
            title: 'Événement 10',
            description: 'Assister à un spectacle de magie',
            isActive: true,
        },
        {
            id: '11.1',
            title: 'Événement 11.1',
            description: 'Rencontrer le chef des voleurs',
            isActive: true,
        },
        {
            id: '11.2',
            title: 'Événement 11.2',
            description: 'Découvrir un réseau de contrebande',
            isActive: true,
        },
        {
            id: '11.3',
            title: 'Événement 11.3',
            description: 'Infiltrer le repaire des voleurs',
            isActive: false,
        },
        {
            id: '12.1',
            title: 'Événement 12.1',
            description: 'Aider un paysan en détresse',
            isActive: true,
        },
        {
            id: '12.2',
            title: 'Événement 12.2',
            description: 'Déjouer un complot dans la cour royale',
            isActive: true,
        },
        {
            id: '12.3',
            title: 'Événement 12.3',
            description: 'Participer à un tournoi d\'archerie',
            isActive: true,
        }
    ];
    

    return (
        <View style={style.container}>
          <View style={style.timelineContainer}>
            <ScrollView horizontal>
              {events.map(event => (
                <TouchableOpacity
                  key={event.id}
                  style={[
                    styles.timelineEvent,
                    activeEvents.includes(event.id) && styles.activeEvent,
                  ]}
                  onPress={() => toggleEventActivation(event.id)}
                >
                  <View
                    style={[
                      styles.timelineEventDot,
                      activeEvents.includes(event.id) && styles.activeDot,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      );
    };