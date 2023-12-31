import React from 'react';
import PropTypes from 'prop-types';
import { RadarChart, Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis } from 'recharts';
import classes from './Performances.module.css';


/**
 * Composant Performances pour afficher un graphique radar représentant les performances de l'utilisateur.
 * 
 * @param {Object[]} performances - La liste des performances à afficher.
 */

function Performances({ performances }) {

    let sortedPerformances = [...performances];
    const kindsOrder = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'];
    sortedPerformances = sortedPerformances.sort((a, b) => {
        return kindsOrder.indexOf(a.kind) - kindsOrder.indexOf(b.kind);
    });

    return (
        <div className={classes.performances_chart}>
            {/* Composant qui rend le graphique responsive */}
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius='70%' data={sortedPerformances} style={{ backgroundColor: '#282D30' }} >
                    {/* Axe angulaire représentant les variables (par exemple, les types de performances) */}
                    <PolarAngleAxis dataKey="kind" angleAxisId={0} tickLine={false} tick={{ fontSize: 10 }} stroke='#FFF' />
                    {/* Grille du graphique radar. Les lignes radiales sont désactivées */}
                    <PolarGrid radialLines={false}/>
                     {/* Affichage des données sous forme de zone dans le graphique radar */}
                    <Radar name="Performances" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}


// aide a valide le type de donne -> si ne correspond pas !AVERTISEMENT!
Performances.propTypes = {
    performances: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Performances;